sub vcl_recv {
  if (req.http.Fastly-Client-IP !~ soundwide_ips && req.http.Fastly-Client-IP !~ akamai_ips && !req.http.cookie:nidev) {
    error 403 "Forbidden";
  }
}
