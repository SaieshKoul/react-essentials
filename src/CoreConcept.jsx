import { CORE_CONCEPTS } from './data.js' 
import CoreConcepts from './CoreConcepts.jsx'

export default function CoreConcept() {
    return (
            <div>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((items) => 
                            <CoreConcepts key={items.title} {...items} /> 
                        )}
                    </ul>
                </section>
            </div>
    )
}
