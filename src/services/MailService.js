import Axios from 'axios';

const endpoint = 'https://fzzvihdsm7.execute-api.us-east-1.amazonaws.com/dev/api/v1/mail';

const MailService = {
  sendEmail: (mail, callback) => {
    let { name, email, message } = mail;
    Axios.post(endpoint, {
      email,
      message,
      name,
    })
      .then((response) => {
        if (callback) callback(true);
      })
      .catch((error) => {
        if (callback) callback(false);
      });
  },
};

export default MailService;
