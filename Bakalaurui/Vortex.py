import os
import google.generativeai as genai

genai.configure(api_key=os.environ["GEMINI_API_KEY"]) # if you don't have setup API key in your pc environment, change this to your own key. 
#(i should change it into my own key for final product in final work that will last almost 1 year)

generation_config = { # Gemini API Model
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 64,
  "max_output_tokens": 100,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="gemini-1.5-flash",
  generation_config=generation_config,
)

chat_session = model.start_chat( # I wont be using it
  history=[
  ]
)


class Gemini:
    def getMission(info):
        initial_context="""with no explanation analyze given information and generate a random mission by balancing what's important and needed the most for villagers. Title (max: 40 symbols), description (up to 40 words), rewards (xp amount, coins), Needed (1 type of item with amount) in a json format structure.
        Information { """ + info + """}"""
        response = chat_session.send_message(initial_context) #this part sends data to gemini. commented it for now.
        print("Bot: ", response.text)
        return response.text
    
    def checkData(context):
        print()
        

