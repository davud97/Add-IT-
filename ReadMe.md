
# Addit
#### Date 10-NOV-25
#### By: Addit Group

***
#### [GitHub](https://github.com/davud97/Add-IT-/tree/main) | [Render](https://add-it-fx6s.onrender.com/) | [Trello](https://trello.com/invite/b/69125b341610dc10e9a3f5a2/ATTI5cb4c6dfc1e34b59608ee8589f8133d70C4C6458/my-trello-board)
***
##### ![](/public/logo/addit.png)
***
### ***Description***
#### Addit is a website that allows users to post advertisements for selling their vehicles,
#### the website allows user to input the details of their vehicles such as milage, price, brand, module.
#### Addit also provides a bidding feature, the seller could set the initial price for bids it
#### also enables sellers to finalize a sale once Ad owner clicks on the button the system automatically declare winner and share their contact number with the seller.

### Addit provides a friendly user navigation bar that aids potential buyers to search for specific modules and types of their desired vehicles.

***
### **Getting started**
#### The website loads Home page on load welcoming guests, it provides the option for new users to sign up and current users to sign in. once signed in successfully users could view displayed advertisements by other users or create their own advertisement also a shortcut in navbar to check their current bids.
***

### ***Technologies used***
* Utilizing EJS Templates
* Session-based authentication
    * middleware restriction for authentication
* Full CRUD functionality.
* Deployed online
* ERD template
* Development road (trello)

***
### Database ERD

![](/public/ERD/erd_add-it.drawio.png)

### ***QA***
- [x] Users cannot sign in with wrong username/password
- [x] Email input validate the the correct email format
- [x] Ad owners cannot bid on their own Ad
- [x] Bidders cannot place bids lower than the original price sat by ad owner
- [x] Bidders cannot set bids less than the last hight bet
- [x] Users cannot make changes on the details of other users ads
- [x] Bids cannot be modified or deleted once placed

***
### **Credits**

#### [Multer](npmjs.com/package/multer)
#### [ERD design tool](diagrams.net)
#### [wireframe design tool](figma.com)
#### [dev map design tool](trello.com)






