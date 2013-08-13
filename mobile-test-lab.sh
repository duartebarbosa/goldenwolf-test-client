#! /bin/bash

mkdir tmp

cd tmp

git clone https://github.com/dotcloud/docker.git

cd docker

echo "Vagrant::VERSION >= \"1.1.0\" and Vagrant.configure(\"2\") do |config|
  config.vm.synced_folder \"../../scripts/\", \"/home/vagrant/scripts\"
  config.vm.provision :shell do |s|
  	s.inline = \"scripts/chdir_to_repo.py\"
  	s.args = \"\"
  end
end" >> Vagrantfile

#vagrant up

#vagrant ssh

#git reset --hard

#cd ../..
#rm -rf tmp
#exit