import React, { useState, useEffect } from 'react';
import StudyGroupCard from './StudyGroupCard';
import axios from '../anxiosInstance';
import customIcon from '../icons/dg-textbooks-1.png';
import '../styles/Pagination.css';

const JoinCourses = ({ setCurrentPage, setSelectedGroup }) => {
    const [courses, setCourses] = useState([]);
    const [currentPage, setCurrentPageState] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    console.log('JoinCourses.js - setCurrentPage:', setCurrentPage);
    console.log('JoinCourses.js - setSelectedGroup:', setSelectedGroup);

    const fetchCourses = async (page = 1) => {
        try {
            const response = await axios.get('/study-groups', {
                params: { page, pageSize: 8 }
            });
            console.log('Fetched courses:', response.data.groups);
            setCourses(response.data.groups); 
            setTotalPages(Math.ceil(response.data.total / 8));
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    useEffect(() => {
        fetchCourses(currentPage);
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPageState(page);
        fetchCourses(page);
    };

    return (
        <div className="search-section-container py-16">
            <div className="styled-header-container">
                <h2 className="text-center text-green-800 text-4xl rajdhani-bold mb-6">ONGOING STUDY GROUPS</h2>
                <div className="line-with-icon" style={{ marginBottom: '4rem' }}>
                    <div className="line"></div>
                    <img src={customIcon} alt="Icon" className="icon" />
                    <div className="line"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {courses.length > 0 ? (
                    courses.map((course, index) => (
                        <StudyGroupCard 
                            key={index} 
                            group={course} 
                            setCurrentPage={setCurrentPage} 
                            setSelectedGroup={setSelectedGroup}
                        />
                    ))
                ) : (
                    <p className="text-center">No study groups available at the moment.</p>
                )}
            </div>
            <div className="pagination-container flex justify-center mt-8">
                <button 
                    className="pagination-button" 
                    disabled={currentPage === 1} 
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    ❮
                </button>
                {[...Array(totalPages).keys()].map(num => (
                    <button 
                        key={num + 1} 
                        className={`pagination-button ${currentPage === num + 1 ? 'active' : ''}`}
                        onClick={() => handlePageChange(num + 1)}
                    >
                        {num + 1}
                    </button>
                ))}
                <button 
                    className="pagination-button" 
                    disabled={currentPage === totalPages} 
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default JoinCourses;