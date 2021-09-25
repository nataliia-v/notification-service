import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'eu-west-1' });

const sendMail = async (event, context) => {
  const params = {
    Source: 'nataly.verbenskaya@gmail.com',
    Destination: {
      ToAddresses: ['nataly.verbenskaya@gmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello from auction!',
        },
      },
      Subject: {
        Data: 'Test AUCTION Mail',
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }

};

export const handler = sendMail;
