# -*- coding: utf-8 -*-
from transformers import AutoModelForCausalLM, AutoTokenizer

class DiabloChat:
    def __init__(self):
        self.model = AutoModelForCausalLM.from_pretrained("microsoft/DialoGPT-medium")
        self.tokenizer = AutoTokenizer.from_pretrained("microsoft/DialoGPT-medium")

    def chat(self, input_text, chat_history=None):
        new_user_input_ids = self.tokenizer.encode(input_text + self.tokenizer.eos_token, return_tensors='pt')

        bot_input_ids = new_user_input_ids
        
        chat_history_ids = self.model.generate(
            bot_input_ids, 
            max_length=1000, 
            pad_token_id=self.tokenizer.eos_token_id, 
            no_repeat_ngram_size=4,   # reduces repetition
            temperature=0.7,          # makes more varied responses
            top_p=0.9,                
            do_sample=True            # more randomness
        )

        chat_output = self.tokenizer.decode(chat_history_ids[:, bot_input_ids.shape[-1]:][0], skip_special_tokens=True)
        return chat_output

"""
chatbot = DiabloChat()

input_text = "Hello"
while input_text != "exit":
    response1 = chatbot.chat(input_text)
    input_text = chatbot.chat(response1)
    print("Bot1: ", response1)
    print("Bot2: ", input_text)
"""