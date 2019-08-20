const tenantAPI = 'https://platform.8x8pilot.com/meetingaccess/v1/free/tenant/register';
const windowUrl = new URL(window.location.href);
const userId = windowUrl.searchParams.get('userId');
const email = windowUrl.searchParams.get('email');
const state = windowUrl.searchParams.get('state');
const token = windowUrl.searchParams.get('token');
const tenant = 'tudortest';

const xhr = new XMLHttpRequest();
xhr.open('POST', tenantAPI, true);
xhr.headers = {
  'Authorization': `Bearer ${token}`,
};
xhr.onload = () => {
  window.location = 'https://eight.auth0.com/continue';
};
xhr.send(JSON.stringify({
  userId,
  email,
  tenant,
}));
