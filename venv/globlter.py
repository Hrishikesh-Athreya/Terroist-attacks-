import csv
import json
from flask import Flask

c_names = ""
city_names = ""
city_lat = ""
city_long = ""
jsonDump = ""
list = []
data = ""
TOA = ""
with open('C:\\Users\\empro\\Desktop\\Kodebay\\globalterrorismdb_0617dist.csv')as file:
    next(file)
    reader = csv.reader(file)
    for row in reader:
        if (int(row[1]) >= 2011):
            if (row[8] == 'india' or row[8] == 'india' or row[8] == 'India'):
                c_names = row[8]
                city_names = row[12]
                city_lat = row[13]
                city_long = row[14]
                TOA = row[29]
                jsonDump = json.dumps(
                    {"country names": c_names, "city_names": city_names, "latitude": city_lat, "longitude": city_long,"TOA":TOA})
                list.append(jsonDump)
for i in range(len(list)):
    if i == 0:
        # print("[" + list[i] + ",")
        data = "[" + list[i] + ","
    elif i == len(list) - 1:
        # print(list[i] + "}")
        data += list[i] + "]"
    else:
        # print(list[i] + ",")
        data += list[i] + ","
print(data)

app = Flask(__name__)


@app.route("/output")
def output():
    return data


if __name__ == "__main__":
    app.run()
