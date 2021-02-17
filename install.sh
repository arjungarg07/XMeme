# Any installation related commands

# Download and Install the Latest Updates for the OS
apt-get update && apt-get upgrade -y

# Set the Server Timezone to CST
#echo "America/Chicago" > /etc/timezone
dpkg-reconfigure -f noninteractive tzdata

# Enable Ubuntu Firewall and allow SSH & MySQL Ports
ufw --force enable
ufw allow 22
ufw allow 3306

# Install essential packages
#apt-get -y install zsh htop

# Installing NodeJS and NPM
 
 echo "Fetching nvm..."
 
 curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash 
sudo  chmod +x ~/.nvm/nvm.sh
 
#source ~/.nvm/nvm.sh
 
 echo "Installing node..."
 
#sudo nvm install 12.18.1 -y

curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
 
sudo apt-get install -y nodejs
npm install -g npm@latest
sudo apt install -y build-essential
#sudo  npm install -g npm@6.14.8
 
 echo "Installed! 🎉"
 
 node -v && npm -v

# Install MySQL Server in a Non-Interactive mode. Default root password will be "root"
echo "mysql-server-5.7 mysql-server/root_password password root" | sudo debconf-set-selections
echo "mysql-server-5.7 mysql-server/root_password_again password root" | sudo debconf-set-selections
apt-get -y install mysql-server-5.7


# Run the MySQL Secure Installation wizard
sudo apt install -y aptitude
aptitude -y install expect

#// Not required in actual script
#MYSQL_ROOT_PASSWORD=abcd1234

SECURE_MYSQL=$(expect -c "
set timeout 10
spawn mysql_secure_installation -u root -proot
send \"n\r\"
send \"n\r\"
send \"n\r\"
send \"n\r\"
send \"n\r\"
send \"y\r\"
expect eof
")

echo "$SECURE_MYSQL"

aptitude -y purge expect
sed -i 's/127\.0\.0\.1/0\.0\.0\.0/g' /etc/mysql/my.cnf
#mysql -uroot -p -e 'USE mysql; UPDATE `user` SET `Host`="%" WHERE `User`="root" AND `Host`="localhost"; DELETE FROM `user` WHERE `Host` != "%" AND `User`="root"; CREATE DATABASE mydb; FLUSH PRIVILEGES;'
mysql -uroot -proot -e 'CREATE DATABASE mydb;'
service mysql restart
