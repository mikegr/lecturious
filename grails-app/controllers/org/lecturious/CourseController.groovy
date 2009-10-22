package org.lecturious

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;

class CourseController {

  def index = { }

  def persistenceManager

  def keyService

  def add = {
    def university = universityKey()
    def course = new Course(params)
    persistenceManager.makePersistent(course)
    university.courses << course
    persistenceManager.makePersistent(university)
    render course.id
  }

  def list = {
    def university = universityKey()
    render(builder: "json", contentType: "application/json") {
      courses {
        university.courses.each {
          course(id: it.id.id, name: it.name, professor: it.professor, identificatr: it.identificator,
                  type: it.type, points: it.points)
        }
      }
    }
  }

  def update = {
    def course = persistenceManager.getObjectById(Course.class, keyService.courseKey(params.country, params.state,
            params.city, params.university, params.course))
    course.properties = params
    persistenceManager.makePersistent(course)
    render course.id
  }

  private def universityKey() {
    persistenceManager.getObjectById(University.class, keyService.universityKey(params.country, params.state,
            params.city, params.university))
  }
}