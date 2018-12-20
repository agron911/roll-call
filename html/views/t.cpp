#include<iostream>
#include<cstdlib>
using namespace std;

int main(){
    int a;
    while(cin>>a){
        int x,i,num,hou,sum=0;
        cin>>num;
        for(i=1;i<a;i++){
            sum+=abs(num);
            cin>>hou;
            num+=hou;
            
        }
        
        cout<<sum<<endl;
    }
}