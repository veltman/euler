import json

def GetScore(str):
	score = 0
	for char in str:
		score = score + (ord(char) - 64)
	return score

names = sorted(json.loads("["+open("names.txt").read()+"]"))

total = 0

for i,name in enumerate(names):
	score = GetScore(name)
	total = total + (score * (i+1))

print total