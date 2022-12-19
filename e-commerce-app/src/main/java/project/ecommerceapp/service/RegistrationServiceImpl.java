package project.ecommerceapp.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project.ecommerceapp.dto.RegistrationRequest;
import project.ecommerceapp.entity.AppUser;
import project.ecommerceapp.entity.AppUserRole;
import project.ecommerceapp.entity.ConfirmationToken;

import java.time.LocalDateTime;

@Service
@AllArgsConstructor
public class RegistrationServiceImpl implements RegistrationService{

    private final AppUserService appUserService;
    private final EmailValidator emailValidator;
    private final ConfirmationTokenService confirmationTokenService;
    private final EmailServiceImpl emailService;
    @Override
    public String register(RegistrationRequest request) {
        boolean validEmail = emailValidator.test(request.getEmail());
        if(!validEmail){
            throw new IllegalStateException("email not valid");
        }
        AppUser appUser = new AppUser();
        appUser.setEmail(request.getEmail());
        appUser.setFirstName(request.getFirstName());
        appUser.setLastName(request.getLastName());
        appUser.setUsername(request.getEmail());
        appUser.setPassword(request.getPassword());
        appUser.setAppUserRole(AppUserRole.USER);
        appUser.setDisplayName(request.getDisplayName());

        String token = appUserService.signUpUser(appUser);
        String link = "https://themillenniumfalcon.junhechen.com/584final/api/v1/user/confirm?token=" + token;
        String email = buildEmail(request.getDisplayName(),link);
        emailService.send(request.getEmail(),email);
        return token;
    }
    @Transactional
    public String confirmToken(String token) {
        ConfirmationToken confirmationToken = confirmationTokenService.getToken(token).orElseThrow(() ->
                new IllegalStateException("token not found"));
        if(confirmationToken.getConfirmedAt() != null){
            throw new IllegalStateException("email is already confirmed");
        }
        LocalDateTime expiresAt = confirmationToken.getExpiresAt();

        if (expiresAt.isBefore(LocalDateTime.now())){
            throw new IllegalStateException("token expired");
        }
        confirmationTokenService.setConfirmedAt(token);
        appUserService.enableAppUser(
                confirmationToken.getAppUser1().getUsername()
        );
        return "confirmed";
    }

    private String buildEmail(String name, String link){
        return

                        "<body id=\"body\" style=\"margin: 0 !important; padding: 0 !important\">\n" +
                        "\n" +
                        "    <!-- Headline -->\n" +
                        "\n" +
                        "    <table\n" +
                        "      width=\"100%\"\n" +
                        "      border=\"0\"\n" +
                        "      cellspacing=\"0\"\n" +
                        "      role=\"presentation\"\n" +
                        "      cellpadding=\"0\"\n" +
                        "    >\n" +
                        "\n" +
                        "      <tr>\n" +
                        "\n" +
                        "        <!-- second layer of color background/ just testing layer here  -->\n" +
                        " \n" +
                        "        <td style=\"background: background: #ced3ed\">\n" +
                        "\n" +
                        "          <!-- the padding is the  table properties for the whole body to be inside it, for the body to be display at the center and have background color to style it\n" +
                        "                   when the website is display -->\n" +
                        "\n" +
                        "          <table\n" +
                        "            border=\"0\"\n" +
                        "            cellspacing=\"0\"\n" +
                        "            cellpadding=\"0\"\n" +
                        "            role=\"presentation\"\n" +
                        "            width=\"600px\"\n" +
                        "            class=\"mobile\"\n" +
                        "            style=\"\n" +
                        "              width: 100%;\n" +
                        "              min-width: 300px;\n" +
                        "              max-width: 600px;\n" +
                        "              margin: auto;\n" +
                        "              background: white;\n" +
                        "              font-family: Arial;\n" +
                        "            \"\n" +
                        "          >\n" +
                        "\n" +
                        "            <!-- Logo image-->\n" +
                        "            <!-- creating a padding for background color behind the logo image , while setting up the resolution width/height and pixel count on the logo \n" +
                        "              image by the use of style -->\n" +
                        "\n" +
                        "\n" +
                        "            <tr>\n" +
                        "\n" +
                        "              <td style=\"background: c1cee3; margin: auto; padding-top: 10px\">\n" +
                        "\n" +
                        "                <img\n" +
                        "                  src=\"https://cdn.glitch.global/cf88ab7b-bd30-468b-af5b-6a360ac654b1/logo.png?v=1671396741655\"\n" +
                        "                  alt=\"logo image\"\n" +
                        "                  width=\"100\"\n" +
                        "                  height=\"auto\"\n" +
                        "                  style=\"\n" +
                        "                    min-width: 100px;\n" +
                        "                    width: 100px;\n" +
                        "                    max-width: 300px;\n" +
                        "                    display: block;\n" +
                        "                    margin: auto;\n" +
                        "                  \"\n" +
                        "                />\n" +
                        "\n" +
                        "              </td>\n" +
                        "  \n" +
                        "            </tr>\n" +
                        "\n" +
                        "            <tr>\n" +
                        "\n" +
                        "              <td align=\"center\">\n" +
                        "    \n" +
                        "                <!-- Headline -->\n" +
                        "                <!-- setting up the Headline by the use of text formating that display at the center .For hero image using style to format the width/height and text is display in block , \n" +
                        "                    inside the assign grid  -->\n" +
                        "\n" +
                        "                <h1 style=\"text-align: center\">Coding in Clothing</h1>\n" +
                        "\n" +
                        "              </td>\n" +
                        "\n" +
                        "            </tr>\n" +
                        "\n" +
                        "            <!-- putting the body in the table and style it it by the use of  padding for the body -->\n" +
                        "\n" +
                        "            <!-- Body copy -->\n" +
                        "     \n" +
                        "            <tr>\n" +
                        "  \n" +
                        "              <td style=\"padding: 0 20px\">\n" +
                        "  \n" +
                        "                <p>Hi there,"+ name +"</p>\n" +
                        "\n" +
                        "                <p>Welcome to Coding in Clothing</p>\n" +
                        "\n" +
                        "                <p>\n" +
                        "                  happy to see you signing up!\n" +
                        "                </p>\n" +
                        "     \n" +
                        "              </td>\n" +
                        "       \n" +
                        "            </tr>\n" +
                        "   \n" +
                        "            <tr>\n" +
                        "        \n" +
                        "              <td>\n" +
                        "\n" +
                        "                <!-- Button -->\n" +
                        "\n" +
                        "     \n" +
                        "                <div style=\"margin: 30px; text-align: center\">\n" +
                        "         \n" +
                        "                  <a\n" +
                        "                    class=\"button\"\n" +
                        "                    href=\""+ link + "\"\n" +
                        "                    style=\"\n" +
                        "                      background-color: #c97f2a;\n" +
                        "                      border-radius: 10px;\n" +
                        "                      color: #ffffff;\n" +
                        "                      display: inline-block;\n" +
                        "                      font-weight: bold;\n" +
                        "                      line-height: 50px;\n" +
                        "                      text-align: center;\n" +
                        "                      text-decoration: none;\n" +
                        "                      width: 300px;\n" +
                        "                      -webkit-text-size-adjust: none;\n" +
                        "                    \"\n" +
                        "                    >Comfirm Your Email</a\n" +
                        "                  >\n" +
                        "  \n" +
                        "                </div>\n" +
                        "        \n" +
                        "              </td>\n" +
                        "  \n" +
                        "            </tr>\n" +
                        "   \n" +
                        "\n" +
                        "            <!-- Footer information: Always include an unsubscribe link! -->\n" +
                        "            <!--  the table properties where the unsubscribe link is inside  , using padding to style the the anchor tag for the hyperlink to be display in the website  -->\n" +
                        "  \n" +
                        "            <tr>\n" +
                        "    \n" +
                        "              <td style=\"padding-top: 100px\" align=\"center\">\n" +
                        "        \n" +
                        "                <!--<a href=\"#\">Unsubscribe</a> -->\n" +
                        "         \n" +
                        "                <small>\n" +
                        "                  \n" +
                        "                </small>\n" +
                        " \n" +
                        "              </td>\n" +
                        "   \n" +
                        "            </tr>\n" +
                        "    \n" +
                        "          </table>\n" +
                        "      \n" +
                        "        </td>\n" +
                        "\n" +
                        "      </tr>\n" +
                        "\n" +
                        "    </table>\n" +
                        "\n" +
                        "  </body>\n";

    }
}
