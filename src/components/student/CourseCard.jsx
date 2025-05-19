import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const CourseCard = ({ course }) => {

    const { currency } = useContext(AppContext)

    // Always show 5 stars and never show zero for ratings or ratings count
    const displayRating = course.courseRatings && course.courseRatings.length > 0
        ? (course.courseRatings.reduce((a, b) => a + b, 0) / course.courseRatings.length).toFixed(1)
        : "5.0";
    const displayRatingsCount = course.courseRatings && course.courseRatings.length > 0
        ? course.courseRatings.length
        : 1;

    return (
        <Link onClick={() => scrollTo(0, 0)} to={'/course/' + course._id} className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg">
            <img className="w-full" src={course.courseThumbnail} alt='' />
            <div className="p-3 text-left">
                <h3 className="text-base font-semibold">{course.courseTitle}</h3>
                <p className="text-gray-500">
                    {course.educator?.name || "david watts"}
                </p>
                <div className="flex items-center space-x-2">
                    <p>5.0</p>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <img
                                key={i}
                                className="w-3.5 h-3.5"
                                src={assets.star}
                                alt=""
                            />
                        ))}
                    </div>
                    <p className="text-gray-500">
                        ({Math.max(course.enrolledStudents?.length || 0, 5)} students)
                    </p>
                </div>
                <p className="text-base font-semibold text-gray-800">{currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p>
            </div>
        </Link>
    )
}

export default CourseCard