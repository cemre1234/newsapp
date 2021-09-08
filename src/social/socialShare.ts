import { SocialSharing } from "@ionic-native/social-sharing";

export class Social {


  socialShare(message: string, subject: string, file: string[] | undefined, url: string) {
    SocialSharing.share(message, subject, file, url)
      .then(() => {
        // Success!
      })
      .catch(() => {
        // Error!
      });
  }

  socialShareFacebook(message: string, image: string, url: string) {
    SocialSharing.shareViaFacebook(message, image, url)
      .then(() => {
        console.log("başarılı");
        console.log("url", url)
      })
      .catch(() => {
        console.log("başarısız");
        console.log("url", url)

      });
  }

  socialShareTwitter(message: string, image: string, url: string) {
    SocialSharing.shareViaTwitter(message, image, url)
      .then(() => {
        // Success!
      })
      .catch(() => {
        // Error!
      });
  }

  socialShareWhatsApp(message: string, image: string, url: string) {
    SocialSharing.shareViaWhatsApp(message, image, url)
      .then(() => {
        // Success!
      })
      .catch(() => {
        // Error!
      });
  }
}
