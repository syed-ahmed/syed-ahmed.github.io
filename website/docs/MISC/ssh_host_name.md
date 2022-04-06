# SSH into server without domain name
- Add into `~/.ssh/config`
    ```
    Host *.bar
      Hostname %h.domainname.com
    ```
- Translates to `foo.bar.domainname.com`
