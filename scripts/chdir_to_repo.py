import os 
import sys

def clone():
	list = [f for f in os.listdir('.') ]
	print "LIST: " + str(list)
	os.system("git clone " + sys.argv[1])

	list2 = [f for f in os.listdir('.') ]
	print "LIST2: " + str(list2)
	for i in list2:
		if i in list:
			pass
		else:
			print "new folder %s" % i
			os.chdir(i)
			print "current dir: %s" % os.getcwd() 


clone()
