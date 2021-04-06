module.exports = {
  remainingDays(job) {
    // Ajustes no job
      // Calculo de tempo restante 
      const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()// Dias rest
  
      const createdDate = new Date(job.created_at) // Dia que foi criado o projeto
      const dueDay = createdDate.getDate() + Number(remainingDays) // Dia do venc do projeto
      const dueDateInMs = createdDate.setDate(dueDay)
  
      const timeDiffInMs = dueDateInMs - Date.now() //Diferença de tempo de entrega em mill
  
      // Transforma milli em dias
      const dayInMs = 1000 * 60 * 60 * 24
      const dayDiff = Math.floor(timeDiffInMs / dayInMs) // Diferença em dias 
  
      // restam x dias
      return dayDiff
  },

  calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
}