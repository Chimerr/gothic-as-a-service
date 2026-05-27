# Gothic(dialogue)-as-a-Service

Super-lekkie API które zwraca losowy dialog z Twojej ulubionej gierki - Gothic 1. Idealne do kucia dialogów na blachę lub po prostu jako dodatek do Twojego projektu.
Używaj wedle uznania — do projektów, botów albo po prostu wtedy, gdy życie potrzebuje więcej klimatu Kolonii karnej.

---

## API 

Coming soon

## Endpointy 

http://localhost:3000/ - zwraca losowy tekst dialogowy i jego autora
http://localhost:3000/mud - losowy dialog Wrzoda
http://localhost:3000/bezi - losowy dialog Bezimiennego

Przykładowa odpowiedź:

```json
{
	"blockName": "Kharim",
	"text": "Nie stać cię na nic lepszego, chłopcze?"
},
```


---

## Self-Hosting (Docker)

Uruchom GaaS na swoim serwerze w kilku prostych krokach!

### 1. Sklonuj to repo
```bash
git clone https://github.com/hotheadhacker/no-as-a-service.git
cd app
```

### 2. Zbuduj docker image
```bash
docker build .
```

### 3. Uruchom na wybranym porcie
```bash
docker run -p 3000:3000 -d gaas
```

Endpointy API będą działać na:
```
http://localhost:3000/
http://localhost:3000/bezi
http://localhost:3000/mud
```

## Niech Śniący ma Cię w swojej opiece! 


                                                                                                                                                          
                                                                                        
         ░▒▒▒▓▒▓▓██▓▓▒░                                             ▒▓▓███▓▓▓▓▓▓▓▒      
                  ░▓▒▒▓███▓░                                   ▒▓███▓▓▓▓▒░              
                     ░░░▓█████▓▓                          ░▓████▓▓▓▓▓▒                  
                        ░▒▒▓▓▓█████████▓▓████████▓▓██████████▓▓▒▓▓▒                     
                          ░ ░▓███████████████████████████████▓▒░░                       
                           ▒░▒██████████████████████████████▓▓▓▒                        
                          ▒▓▒▒▓▓▓▓ ░████▓▓███████████████████▓▒█                        
                        ▒▒▓▒▓█▓█▓  ░███████▓▓▓▓██▓████▒░▓▓█▓██▒▒▓▓▒                     
                  ░█████▓█▓▓██▒▓    ▓█████▓▒▓▒▓▓▓▓█▓▓▓▓ ▒█▓▒▓██░███████▓░               
              ░▓▓▓▓▓▓▓█▓▓▓▒▓▓ ░▓▒░   ▓████▒▒▓▓▓██▒▒▓▓▒ ░▓█▓▒▒▓█▒▓▓▓▓▓▓██▓█▓▒            
           ░▓▓▓▓▓▓▓▓▓▓██▓▓▒▒▓  ░▓▓▓▒▒░ ░▒████▓▓▒░▒▒    ▒▓▓▓▓░▒█▒█▓▓██████▓▓▓▓▓▓░        
         ▒▓▒░             ░▓▓░▓▓▒      ░ ░████▓░░         ▓▓ ▒▓█░             ▒▓▓▒      
       ▒                   ▒▓░░▓        ░░▓████▒░▒        ▓▒ ▓██                  ░▒    
                         ▒▓▓▓▒ ▓        ░░░▓██▓▓▒▒        ▓ ▒▓▓█▓░                      
                       ░▓▓▓▓▓▓▓▒         ░▒███▒▓░░        ▓░▓▓█▓▓▓▓░                    
                     ░▓▓▓▓███▓▒▓▒        ░░███▒▓░▒       ░▒▒▓██▓██▓▒▓                   
                    ▒▓▓▓██▓    ░▓         ░███▒▓▓▓       ▓▒▓   ▒███▓▓▓░                 
                   ▒▓▓█░        ▓▓      ░ ░█▓██▓▒▓       █▒        ▒█▓▒▓                
                  ▒▓▓                   ▒▒░ ▓█▒░░▒                    ▓▓▒               
                  ▒                     ▒▒██▓███░                       ▓               
                 ░                    ░▓▓██████████▓                     ▒              
                                      ░░█████████▒▒░                                    
                                       ▓██▓▒▓▒▓▓▓█▓░                                    
                                       ▒█░  ▒░ ░░▒▒                                     
                                       ░▓   ▒   ░▒░                                     
                                        ▓        ▓                                      
                                                ░                                       

