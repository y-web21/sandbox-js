FROM php:8.1-fpm

ARG LARAVEL_VER
ARG NODE_VER=16.14.2 # LTS
ARG UID=1000
ARG USER=user
ARG USER_PASSWORD=user
ARG INSTALL_XDEBUG=false

COPY ./php.ini /usr/local/etc/php/

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# set locale
RUN apt-get update && apt-get install -y --no-install-recommends \
    locales=2.31-13+deb11u3 \
    && locale-gen C.UTF-8 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
ENV LANG=C.UTF-8

# https://github.com/mlocati/docker-php-extension-installer
RUN docker-php-ext-install pdo_mysql

# install and enable xdebug
RUN if ${INSTALL_XDEBUG}; then \
    pecl install xdebug-3.1.3 && docker-php-ext-enable xdebug ;fi

# install Composer
RUN curl -sS http://getcomposer.org/installer | php -- --2 --filename=composer --install-dir=/usr/bin/
# ENV COMPOSER_ALLOW_SUPERUSER 1
ENV COMPOSER_HOME /home/${USER}/.composer
ENV PATH $PATH:$COMPOSER_HOME/vendor/bin

# laravel required packages
RUN apt-get update && apt-get install -y --no-install-recommends \
    git=* \
    vim=* \
    zip=* \
    unzip=* \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# install nodejs npm
RUN apt-get update && apt-get install -y --no-install-recommends npm=* \
    && npm install -g n@* \
    && n ${NODE_VER} \
    && apt-get purge -y nodejs npm \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# add general user
RUN apt-get update && apt-get install -y --no-install-recommends sudo=* \
    && useradd --uid ${UID} --groups sudo ${USER} --user-group --create-home --shell /bin/bash \
    && echo ${USER}:${USER_PASSWORD} | chpasswd \
    && echo root:root | chpasswd \
    && echo "%${USER} ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
ENV LARAVEL_VER=${LARAVEL_VER}
ENV USER=${USER}
COPY ./install_laravel.bash /home/${USER}/
USER ${USER}
