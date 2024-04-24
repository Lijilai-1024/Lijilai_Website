
from rest_framework.views import APIView
from rest_framework.response import Response
import requests
class getDorm(APIView):
    def get(self,request,*args,**kwargs):
        switch = getThings()
        return Response(switch)
    
def getThings():
        url="https://net.sjtu.edu.cn/dorm/index.php"
        r = requests.get(url)
        if r.status_code!=200:
            print("Error: Cannot access the website")
            exit()
        switch = {}
        data = []
        data_raw = r.text.replace("\n","").split("<tr>")
        for i in range(1,len(data_raw)):
            x = data_raw[i].split("</tr>")
            data.append(x[0])
        for i in range(1,len(data)):
            tmp = data[i].split("<td>")
            name = tmp[1].split("</td>")[0]
            switch[name] = []
            for j in range(2,len(tmp)):
                status = tmp[j].split("</td>")[0]
                if status == "<img src=up.gif>":
                    switch[name].append("up")
                elif status == "<img src=down.gif>":
                    switch[name].append("down")
        return switch