package org.lecturious



import javax.jdo.annotations.*

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
class Country implements Serializable {

    @PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    Long id

    @Persistent
    String name

    @Persistent
    List<State> states

    static constraints = {
    	id( visible:false)
    }
}
