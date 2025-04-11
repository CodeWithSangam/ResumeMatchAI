# utils/matcher.py
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def match_resume_to_jd(resume_data, jd_keywords):
    # Join parsed resume keywords into string
    resume_string = ' '.join(resume_data['skills']) + ' ' + resume_data['education']
    jd_string = ' '.join(jd_keywords)

    tfidf = TfidfVectorizer()
    tfidf_matrix = tfidf.fit_transform([resume_string, jd_string])
    score = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:2])[0][0] * 100
    return round(score, 2)
