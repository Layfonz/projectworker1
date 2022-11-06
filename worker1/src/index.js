addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
	const country = request.cf.country;
	const notsg = 'https://1.1.1.1/';
	const ipaddress = request.headers.get('CF-Connecting-IP');
	
	let html_content = '';
	let html_style = 'body{padding:6em; font-family: sans-serif;} h1{color:#f6821f;}';
	html_content += ' This is your IP address: ' + ipaddress + '';
	html_content += ' and you are accessing this site from ' + country + '';
	html_content += ', ' + request.cf.city + '';
	html_content += ' |ASN: ' + request.cf.asn + '';

	let html = `<!DOCTYPE html>
<head>
  <title> Geolocation: Hello World </title>
  <style> ${html_style} </style>
</head>
<body>
  <h1>Geolocation: Hello World!</h1>
  <p>You now have access to geolocation data about where your user is visiting from.</p>
  ${html_content}
</body>`;

if (country != null && country == "SG"){
	return new Response(html, {
		headers: {
		  'content-type': 'text/html;charset=UTF-8',
		},
	  });
		  
 
	}
  else {
	return Response.redirect(notsg);
  }

  }