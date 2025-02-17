# -*- coding: utf-8 -*-
from DiabloGPT import DiabloChat
from http.server import HTTPServer, BaseHTTPRequestHandler
from Vortex import Gemini
import json
import re

chatbot = DiabloChat()

class RequestHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        print("Attempt to connect: ", self.path)
        if self.path == '/unreal':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))
            
            #print(f"Received data: {data}")
            
            response_data = {
                "message": "Data received but failed to get API!"
            }
            
            if 'message' in data:
                if isinstance(data['message'], str): 
                    data['message'] = json.loads(data['message'])  
                
                info = ""
                storage_data = data['message']['storageData']
                info += f"Storage Data: Wood: {storage_data['wood']}, Stone: {storage_data['stone']} \n"
                info += "Mission List: \n"
                for mission in data['message']['missionsList']:
                    info += f"ID: {mission['iD']}, Resource Type: {mission['resource Type']}, Mission Accepted: {mission['mission Accepted']}\n"
                
                
                print("Converted Data:" + info)
                
                received = Gemini.getMission(info)

                pattern = re.compile(r"```json(.*?)```", re.DOTALL)  # removes json '```' part
                matches = pattern.findall(received)
                
                if matches:
                    json_content = matches[0].strip()
                    print(f"Extracted JSON content: {json_content}")
                    
                    try:
                        parsed_json = json.loads(json_content)
                        print("Parsed: ", parsed_json)
                        response_data = {
                            "message": json_content 
                        }
                    except json.JSONDecodeError as e:
                        print(f"Error parsing JSON: {e}")
                else:
                    print("No JSON content found.")
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(response_data).encode())
        elif self.path == '/Diablo':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))
            
            response_data = {
                "message": "Data received but failed to get API!"
            }
            
            try:
                print(data["message"])
                
                response = chatbot.chat(data["message"])
                
                response_data = {
                    "message": response
                }
            except json.JSONDecodeError as e:
                print(f"Error parsing JSON: {e}")
            
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(response_data).encode())
            
        else:
            self.send_response(404)
            self.end_headers()
            
            
def run(server_class=HTTPServer, handler_class=RequestHandler, port=8000):
    try:
        print("Testing Diablo Chat bot model...")
        chatbot.chat("Hello!")
        print("Success!")
    except Exception:
        print("Error in Diablo Chatbot.")
    
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Starting server on port {port}...')
    httpd.serve_forever()

if __name__ == '__main__':
    run(port=8000)
