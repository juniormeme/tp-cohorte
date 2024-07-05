#!/bin/bash 
# on cree un dossier temporaire 
cd /home/ec2-user/mon-site/; mkdir temp

# on entre dans temp 
# Telecharger le fichier 
git clone []
# Soutirer le fichier index.html 
cp 
rm 
#
# Comparer les fichiers correspondants
diff /home/ec2-user/notre-site/index.html index.html
if [ $? -eq 0 ]; then
    echo "Pas de différence pour le fichier "
else
    echo "Différences détectées pour le fichier"
fi

