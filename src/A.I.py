"""
          Developed By Satyam

                A.I.py

     Enhanced A.I. chatbot program
  ------------------------------------
    Press CLOSE to exit the program!
  ------------------------------------
"""

print("Bot : How are you?")
inp = input("You : ")
if (inp == "I am fine"):
    print("Bot : Me too.")
    print("Bot : Wanna play some fun games?")
    gameQues = input("You : ")
    if (gameQues == "Yes"):
        print("Bot : Sorry No games available right now.")
        print("Bot : Do you me want to do something else for you.")
        input("You : ")
    else:
        print("Bot : Ok, enjoy your day.")
        print("Bot : Do you me want to do something else for you.")
        input("You : ")
else:
    print("Bot : Do you want me to crack some jokes for you?")
    jokeQues = input("You : ")
    if (jokeQues == "Yes"):
        print("Bot : Sorry No jokes available right now.")
        print("Bot : Do you me want to do something else for you.")
        input("You : ")
    else:
        print("Bot : Ok, enjoy your day.")
        print("Bot : Do you me want to do something else for you.")
        input("You : ")
