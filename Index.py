print("Assalamualaikum!")

# nums = [1,3,5,7]
# print(nums)
# a = int(input("Enter a number: "))
# nums.append(a)
# print(nums)
# b = int(input("Replace 3 with a new number: "))
# nums[1] = b
# print(nums)

# text = "Programming"
# print(text[:5])
# print(text[-3:])
# print(text[8:11])
# print(text[3:7])

# num = int(input("Enter a number: "))
# def is_even(num):
#     if num%2==0:
#         print("The number is even")
#     else:
#         print("Number is odd")
# is_even(num)

# numbers = []
# for i in range(1,11):
#     num = int(input(f"Enter {i} number: "))
#     numbers.append(num)
# print(numbers)



#Guess the number game
import random

def play_game():
    
    name = input("Enter your name: ")
    print("Assalamualaikum!",name,"Lets start the game!")
    
    n = random.randint(1,100)
    print(n)
    num = int(input("Guess the number: "))
    guess = 1
    
    while num != n:
        if num>n:
            print("Your number is greater")
        elif num<n:
            print("Your number is lesser")                
        guess+=1
        num = int(input("Guess the number: "))
               
    else:
        print(f"Congrates! {name} You guessed the right number\nYour total number of guesses is",guess,"\n")  
    return name,guess   #Returns name and guess for comparing between players

print("******Game Started******")
players = int(input("How many player wants to play? "))

players_data = []   #Stores players name and no of guesses

for i in range(players):
    if i!=0:
        print("Enter another players name")
    name,guess = play_game()    #Executes the function for each player and stores the name and guess data  
    players_data.append((name,guess))   
    

winner = players_data[0]    
tie = 0
for player in players_data:         
    if player[1] < winner[1]:       
        winner = player      
        tie = 0
    elif player[1] == winner[1]:    
        tie = 1

if tie == 1:
    print("Its a tie\n Well Played Champs!!")
else:
    print("The Winner player is",winner[0], "with",winner[1],"guesses\nCongratulations",winner[0])

print("*****Game Finished*****")

#Will be continued...(Tie part)