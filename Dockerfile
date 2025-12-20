FROM python:3.9-slim

WORKDIR /app

# Install system dependencies if needed (e.g. for curl_cffi or pillow)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application
COPY . .

# Create a non-root user (Hugging Face requirement)
RUN useradd -m -u 1000 user
USER user
ENV HOME=/home/user \
    PATH=/home/user/.local/bin:$PATH

WORKDIR /app

# Expose port (Hugging Face Spaces defaults to 7860)
EXPOSE 7860

# Run the server
# Note: We change the port to 7860 to match HF Spaces default
CMD ["uvicorn", "api_server:app", "--host", "0.0.0.0", "--port", "7860"]
