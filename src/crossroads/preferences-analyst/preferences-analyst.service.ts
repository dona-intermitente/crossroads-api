import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class PreferencesAnalystService {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor(private configService: ConfigService) {
    const apiKey = this.configService.get<string>('GEMINI_API_KEY');

    if (!apiKey) {
      throw new Error('GEMINI_API_KEY is not defined');
    }

    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
    });
  }

  async calculatePreferences(
    roads: string[],
  ): Promise<{ value: number; label: string; description: string }[]> {
    const prompt = `
      Actúa como un experto en sociología y análisis de datos.
      Analiza esta lista de opciones: ${roads.join(', ')}.
      
      Tu tarea es estimar el porcentaje de preferencia de la población general para cada opción.
      La suma de los valores ("value") debe ser 100 (o 100%).
      
      IMPORTANTE: Responde ÚNICAMENTE con un JSON válido. 
      No incluyas bloques de código markdown (\`\`\`json).
      No incluyas texto introductorio ni despedidas.
      Solo el array crudo.
      El formato debe ser estrictamente un arreglo de objetos como este:
      [
        { 
          "label": "Nombre opción", 
          "value": 60, 
          "description": "Razón sociológica breve" 
        },
        ...
      ]
    `;

    const result = await this.model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    try {
      const cleanedText = text
        .replace(/```json/g, '')
        .replace(/```/g, '')
        .trim();
      const jsonResponse = JSON.parse(cleanedText);
      if (Array.isArray(jsonResponse)) {
        return jsonResponse;
      } else {
        return [jsonResponse];
      }
    } catch (error) {
      console.error('Error parseando JSON de Gemini:', error);
      return roads.map((r) => ({
        value: 0,
        label: r,
        description: 'Error en análisis',
      }));
    }
  }
}
