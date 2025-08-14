# 📚 Application de Gestion de Livres (Vue.js)

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-brightgreen?logo=vue.js)
![Licence](https://img.shields.io/badge/licence-MIT-blue)
![Statut](https://img.shields.io/badge/statut-Actif-success)
![Type](https://img.shields.io/badge/Type-Examen-orange)

Bienvenue dans **votre bibliothèque numérique** !  
Cette application Vue.js permet de **créer**, **afficher** et **naviguer** entre vos livres préférés.  
Un petit projet, mais pensé avec ❤️ pour être clair, fluide et agréable à utiliser.

---

## 📂 Structure du projet
src/ <br />
├── api/ Communication avec l'API <br />
├── components/ Composants réutilisables (BookMenu, Footer…) <br />
├── router/ Gestion de la navigation <br />
├── views/ Pages principales (BookForm, BookList, Home) <br />
---

## ✨ Fonctionnalités

### 🖥 Général
- Footer affiché sur toutes les pages enfants de `Home`
- Navigation rapide entre liste et formulaire

### 📋 Liste des livres
- Affichage clair et lisible des titres
- Tableau des livres affiché dès l’arrivée sur la page

### 📝 Formulaire
- Formulaire complet avec tous les champs nécessaires
- Bouton **Annuler** → Retour direct à la liste
- Choix de la couleur de couverture : `ROUGE`, `ROSE`, `BLEU`
- Redirection automatique après création réussie
- Validation stricte :
  - Champs obligatoires
  - Prix ≤ 49 €
  - Messages d’erreurs clairs

---
<!--
## 📸 Aperçu

Exemples :
1. **Page d’accueil**
2. **Liste des livres**
3. **Formulaire de création**
-->
---

## ⚙️ Installation

1. **Cloner le projet**
```bash
git clone https://github.com/votre-nom-d-utilisateur/projet-vuejs-exam.git
npm install
npm run serve
```
