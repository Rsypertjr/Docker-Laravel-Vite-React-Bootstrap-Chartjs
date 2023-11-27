FROM php:8.1-fpm-alpine

# environment arguments 
ARG UID 
ARG GID 
ARG USER 
ARG xdebug_enabled=false

ENV UID=${UID} 
ENV GID=${GID} 
ENV USER=${USER} 

# Dialout group in alpine linux conflicts with MacOS staff group's gid, whis is 20.  So we remove it. 
RUN delgroup dialout

# Creating user and group
RUN addgroup -g ${GID} --system ${USER} 
RUN adduser -G ${USER} --system -D -s /bin/sh -u ${UID} ${USER}

# Modify php fpm configuration to use the new user's priviledges.
RUN sed -i "s/user = www-data/user = '${USER}'/g" /usr/local/etc/php-fpm.d/www.conf 
RUN sed -i "s/group = www-data/group = '${USER}'/g" /usr/local/etc/php-fpm.d/www.conf  
RUN echo "php_admin_flag[log_errors] = on" >> /usr/local/etc/php-fpm.d/www.conf 



# Installing php extensions
RUN apk update && apk upgrade
RUN docker-php-ext-install pdo pdo_mysql bcmath

# Installing redis extension
RUN mkdir -p /usr/src/php/ext/redis \ 
    && curl -fsSL https://github.com/phpredis/phpredis/archive/5.3.4.tar.gz | tar xvz -C /usr/src/php/ext/redis --strip 1 \ 
    && echo 'redis' >> /usr/src/php-available-exts \ 
    && docker-php-ext-install redis \
    && docker-php-ext-install redis 

# Installing MongoDb php Driver
RUN apk --update add --virtual build-dependencies build-base openssl-dev autoconf \
  && pecl install mongodb \
  && docker-php-ext-enable mongodb \
  && apk del build-dependencies build-base openssl-dev autoconf \
  && rm -rf /var/cache/apk/*
RUN echo "extension=mongodb.so" >> /usr/local/etc/php/php.ini 

# Installing PHP-mysql and required extensions
RUN echo http://dl-cdn.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories
RUN echo http://dl-cdn.alpinelinux.org/alpine/edge/community/ >> /etc/apk/repositories



# installing required extensions
RUN apk update && \
    apk add bash build-base gcc wget git autoconf libmcrypt-dev libzip-dev zip \
    g++ make openssl-dev \
    php81-openssl \
    php81-pdo_mysql \
    php81-mbstring

RUN pecl install mcrypt && \
    docker-php-ext-enable mcrypt

RUN docker-php-ext-install pdo pdo_mysql mysqli

CMD ["php-fpm", "-y", "/usr/local/etc/php-fpm.conf", "-R"]
