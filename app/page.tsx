import { Button } from '@base-ui/react'
import React from 'react'
import CompanionCard from '@/components/CompanionCard'
import CTA from '../components/CTA'
import CompanionsList from '@/components/CompanionsList'
import {recentSessions} from "../constants"

const Page = () => {
  return (
  <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div>
      <h1 className="text-2xl underline">Popular Companions</h1>
      
      <section className = "home-section">
        <CompanionCard 
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Networks Of the Brain"
          subject="science"
          duration={45}
          color= "#ffda6e"
        />
        <CompanionCard 
          id="456"
          name="Countsy the Number Wizard"
          topic="Derivatives and Integrals"
          subject="science"
          duration={30}
          color= "#e5d0ff"
          />
        <CompanionCard 
          id="789"
          name="Verba the Vocabulary Builder"
          topic="language"
          subject="English Literature"
          duration={30}
          color= "#BDE7FF"
        />
      </section>
      
      <section className='home-section'>
          <CompanionsList 
          title="Recently Completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
          />
          <CTA />
      </section>
    </div>
  </main>
  )
}

export default Page