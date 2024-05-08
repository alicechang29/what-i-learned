user = db.session.query(User).filter(User.email == email).first()
- filtering by user class > then email to get user instance row 