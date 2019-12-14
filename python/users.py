import random
class Users:
    __number = 0
    length = 0
    def __init__(self):
        self.id = Users.length
        Users.length += 1
        Users.__number
    def getName(self):
        return self.name
    def getId(self):
        return self.id
    def getPasswd(self):
        return self.passwd
    def getPhone(self):
        return self.phone
    def getAge(self):
        return self.age
    def getSex(self):
        return self.sex
    def setName(self,_name):
        self.name = _name
    def setId(self,_id):
        self.id = _id
    def setPasswd(self,_passwd):
        self.passwd = _passwd
    def setPhone(self,_phone):
        self.phone = _phone
    def setAge(self,_age):
        self.age = _age
    def setSex(self,_sex):
        self.sex = _sex
    def test(self):
        for j in vars(self).items():  #类成员的遍历
            print(j)

for i in range(0,20):
    x = random.random()
    print(x)
