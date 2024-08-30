mysql -u root -p $MYSQL_ROOT_PASSWORD --execute \
"CREATE DATABASE IF NOT EXISTS $DB_DATABASE;
GRANT ALL PRIVILEGES ON $DB_DATABASE.* TO '$DB_USERNAME'@'%';
DELETE FROM mysql.user WHERE User='root' AND Host NOT IN ('localhost', '127.0.0.1', '::1', 'db');"