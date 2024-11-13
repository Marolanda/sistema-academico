# sistema-academico

## Descrição do Projeto
<p align="center">Exercício Prático – Implementação Colaborativa com TDD, Code Review e CI 
Projeto: Sistema Acadêmico 

## Visão Geral do Sistema
Este projeto simula um sistema acadêmico básico com três módulos interdependentes, desenvolvido para aplicar práticas ágeis, incluindo TDD (Test-Driven Development), Code Review e Integração Contínua (CI) usando GitHub Actions.

## Objetivo
Aplicar práticas de desenvolvimento colaborativo e ágil, garantindo validação de entradas e integridade do sistema. Os testes automatizados, realizados com Jest, garantem a conformidade dos critérios de aceitação e a execução correta dos fluxos entre módulos.

## Requisitos e Ferramentas

pip install -r requirements.txt

- blinker==1.8.2
- click==8.1.7
- colorama==0.4.6
- Flask==3.0.3
- itsdangerous==2.2.0
- Jinja2==3.1.4
- joblib==1.4.2
- MarkupSafe==3.0.2
- numpy==2.1.2
- pandas==2.2.3
- python-dateutil==2.9.0.post0
- pytz==2024.2
- scikit-learn==1.5.2
- scipy==1.14.1
- six==1.16.0
- threadpoolctl==3.5.0
- tzdata==2024.2
- Werkzeug==3.0.5

## Configuração do Ambiente
```bash
# Clonar o repositório
git clone https://github.com/Marolanda/sistema-academico

# Entrar no diretório do projeto
cd sistema-academico

# Instalar dependências
npm install

# Executar todos os testes
npm test

# Executar testes unitários
npm run test:unit

## Casos de Teste

#Módulo Lançamento de Notas

Notas válidas: (7.5, 8.2) ➔ "Notas salvas com sucesso"
Nota 1UP inválida: (-1.0, 8.2) ➔ "Nota de 1UP inválida"
Nota 2UP inválida: (7.5, 12.0) ➔ "Nota de 2UP inválida"
Entradas não numéricas: ("sete", 8.2) ➔ "Entradas devem ser numéricas"

# Módulo Cálculo de Média 

Notas válidas: (7.0, 8.0) ➔ Média 7.5
Notas iguais: (5.0, 5.0) ➔ Média 5.0

# Módulo Status do Aluno

Média inferior a 4.0 ➔ "Reprovado por média"
Média igual a 6.0 ➔ "Aprovado por média"

## Autores

- **Mariana Holanda** 
- **Júlio Cesar** 
- **Felipe Vinicius**  