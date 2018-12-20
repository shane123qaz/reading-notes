#!/bin/bash
value=home
echo '$value'
echo "$value"

echo "---------------------------"
read -p "username: " name
read -p "password: " password
read -p "dispaly information? [y/N]" choose
if [ $choose = 'y' ]; then
    echo 'username: '$name
    echo 'password: '$password
fi