import re

with open("new-quran-wordlist.txt",encoding='utf') as file_in:
    with open("n-quran-wordlist.txt",'a',encoding='utf') as inn:
      for line in file_in:
        if len(line) == 6:
           inn.write("'"+line.strip()+"',"+'\n')
