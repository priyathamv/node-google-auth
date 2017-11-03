Setting up mongodb on CentOS 7

// Adding the MongoDB Repository
sudo vi /etc/yum.repos.d/mongodb-org.repo

// paste the below lines into /etc/yum.repos.d/mongodb-org.repo file
[mongodb-org-3.4]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.4/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-3.4.asc

// verify that the MongoDB repository exists within the yum utility
yum repolist

// Installing MongoDB
sudo yum install mongodb-org

// start the MongoDB service with the systemctl utility:
sudo systemctl start mongod
