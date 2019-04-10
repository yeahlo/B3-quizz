## quizz

Conception et réalisation d'un quizz
- creer une liste de question
- enregistrement des questions
- lancer le quizz (gestion des points, question suivante, etc)
- bilan et resultats

## GIT

git remote add upstream https://github.com/yeahlo/B3-quizz.git

git remote -v

git pull upstream

git checkout dev
git merge master


// avant de faire une PR
sur la branche master

git fetch upstream
git merge upstream/master

on revient sur sa branche de dev
git checkout dev

git rebase -i master
git mergetool 

à la fin du rebase on force le push

git push --force