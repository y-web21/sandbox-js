#!/usr/bin/env bash

test ! -d ${APP_HOME} && sudo mkdir -p ${APP_HOME}
sudo chown ${USER}:${USER} ${APP_HOME}

if [[ $(ls ${APP_HOME} -1U | wc -l) -eq 0 ]];then
    composer create-project laravel/laravel=${LARAVEL_VER} ${APP_HOME} --prefer-dist
    sed -i -E 's/(DB_CONNECTION=).*$/\1\${DB_CONNECTION}/' ${APP_HOME}/.env
    sed -i -E 's/(DB_HOST=).*$/\1\${DB_HOST}/' ${APP_HOME}/.env
    sed -i -E 's/(DB_PORT=).*$/\1\${DB_PORT}/' ${APP_HOME}/.env
    sed -i -E 's/(DB_DATABASE=).*$/\1\${MYSQL_DATABASE}/' ${APP_HOME}/.env
    sed -i -E 's/(DB_USERNAME=).*$/\1\${MYSQL_USER}/' ${APP_HOME}/.env
    sed -i -E 's/(DB_PASSWORD=).*$/\1\${MYSQL_PASSWORD}/' ${APP_HOME}/.env
fi
