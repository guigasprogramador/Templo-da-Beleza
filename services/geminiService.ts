
import { GoogleGenAI } from "@google/genai";

export async function askSalonAI(userQuery: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    Você é o assistente virtual do salão 'Templo da Beleza' em Samambaia Norte, Brasília.
    Seu objetivo é ajudar clientes a entenderem nossos serviços e incentivá-los a agendar pelo WhatsApp.
    Nossos serviços incluem: Cortes e Mechas Criativas, Terapia Capilar, Especialista em Cachos, Manicure/Pedicure, e Designer de Sobrancelhas.
    Somos conhecidos pela nossa gerência de excelência e profissionais altamente capacitados.
    Endereço: Qr 406, lote 1 - Samambaia Norte.
    Telefone: (61) 3358-5858.
    Responda de forma elegante, acolhedora e concisa. Sempre sugira o agendamento no final.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 300,
      },
    });

    return response.text || "Desculpe, tive um pequeno problema. Por favor, entre em contato conosco diretamente pelo WhatsApp!";
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "Olá! No momento estou descansando, mas você pode falar com nossa equipe agora mesmo clicando no botão do WhatsApp!";
  }
}
