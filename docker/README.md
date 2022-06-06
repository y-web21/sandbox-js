# docker

## cp file from docker, to docker.

```bash
# from
docker cp <container_ID>:/var/www/html/index.html index.html
# to
docker cp ~/.bashrc <container_ID>:/home/user/.bashrc
```

```bash
docker cp $(docker ps -qf name=db$):/root/.mysql_history . 
```


