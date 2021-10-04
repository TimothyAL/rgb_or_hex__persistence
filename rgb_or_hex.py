import sys

def converter(num1, num2 = None, num3 = None):
    try:
        if num2:
            return f"#{hex(int(num1))[2:]}{hex(int(num2))[2:]}{hex(int(num3))[2:]}"
        else:
            return (int(num1[1:3],16), int(num1[3:5], 16), int(num1[5:],16))
    except:
        print('one or more of your inputs was not in the correct format')

if __name__ == '__main__':
    if len(sys.argv) > 2:
        print(converter(sys.argv[1],sys.argv[2],sys.argv[3]))
    elif len(sys.argv) == 2:
        print(converter(sys.argv[1]))
    else:
        print('Arguments could not be parsed please try again')
        print('if you are entering a hex value did you include quotation marks?')