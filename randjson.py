import json
import random
import string

def rand_str(length):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

n_entry = 10000
len_key = 10
len_value = 100

o = {rand_str(len_key): rand_str(len_value) for _ in range(n_entry)}
print(json.dumps(o, indent=0))
