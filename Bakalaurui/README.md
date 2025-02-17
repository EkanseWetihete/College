The project was for Bachlor degree final work.

1. Change API Key to your own from Vortex.
2. Use "Diablo GPT.py" to change the model that you would like to use. (It will automatically download your model upon start up if you don't have one)
3. Start "HTTP Request.py" file using your environment.
4. Default port is set to 8000, you can access it via post request. This project was meant for UE5 HTTP plugin so, you need to additionaly set it up in there too.

using '/unreal' path, server takes JSON format data, decodes and converts into information which is sent to Gemini API. It looks for best possible missions that currently is needed, reconverts back to json by removing unnecrssary text and sends back to UE5.
using '/Diablo' path, server takes JSON format data but only a string "message" is taken, sends to local AI Model and returns a message.
