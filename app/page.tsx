import CompanionsCard from '@/components/CompanionsCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/CTA'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'
import React from 'react'


const Page =  async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionCompanions = await getRecentSessions();
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className='home-section'>
        {companions.map((companion) => (
          <CompanionsCard key={companion.id} { ... companion } color={getSubjectColor(companion.subject)}
         />
        ))}
      
      </section>
      <section className='home-section'>
        <CompanionsList 
          title= "Recently completed session"
          companions= {recentSessionCompanions}
          className= "w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  )
}

export default Page