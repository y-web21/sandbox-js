FROM mysql:8.0

COPY ./my.cnf /etc/mysql/conf.d/my.cnf
COPY ./initdb.d/ /docker-entrypoint-initdb.d
RUN mkdir -p /var/log/mysql \
    && touch \
    /var/log/mysql/error.log \
    /var/log/mysql/slow.log \
    /var/log/mysql/mysqld.log \
    && chmod 644 \
    /etc/mysql/conf.d/my.cnf \
    /var/log/mysql/error.log \
    /var/log/mysql/slow.log \
    /var/log/mysql/mysqld.log \
    && chown mysql:mysql \
    /var/log/mysql/error.log \
    /var/log/mysql/slow.log \
    /var/log/mysql/mysqld.log

